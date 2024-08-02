import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
    let supabaseResponse = NextResponse.next({
        request,
    })

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
                    supabaseResponse = NextResponse.next({
                        request,
                    })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    )
                },
            },
        }
    )

    // IMPORTANT: Avoid writing any logic between createServerClient and
    // supabase.auth.getUser(). A simple mistake could make it very hard to debug
    // issues with users being randomly logged out.

    const {
        data: { user },
    } = await supabase.auth.getUser()


    /**
     * Might need to move the supabase keys into a config.json instead, as it should be incorporated into the "setup"
     * workflow
     */
    // const { data, error } = await supabase
    //     .from('users')
    //     .select()
    //     .eq('site_owner', true);
    // if (error) {
    //     const url = request.nextUrl.clone();
    //     url.pathname = '/error'
    //     return NextResponse.redirect(url)
    // }
    // /**
    //  * If there is no site_owner, redirect to the setup page.
    //  */
    // if (data && data.length === 0 && !request.nextUrl.pathname.startsWith('/setup')) {
    //     const url = request.nextUrl.clone()
    //     url.pathname = '/setup'
    //     return NextResponse.redirect(url);
    // }
    // /** If there is a site_owner, do not allow people to access setup page
    //  * (There is no harm, if they find a way to anyway, as the database only allows 1 site_owner
    //  */
    // if (data && data.length > 0 && request.nextUrl.pathname.startsWith('/setup')) {
    //     const url = request.nextUrl.clone()
    //     url.pathname = '/'
    //     return NextResponse.redirect(url)
    // }


    // IMPORTANT: You *must* return the supabaseResponse object as it is. If you're
    // creating a new response object with NextResponse.next() make sure to:
    // 1. Pass the request in it, like so:
    //    const myNewResponse = NextResponse.next({ request })
    // 2. Copy over the cookies, like so:
    //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
    // 3. Change the myNewResponse object to fit your needs, but avoid changing
    //    the cookies!
    // 4. Finally:
    //    return myNewResponse
    // If this is not done, you may be causing the browser and server to go out
    // of sync and terminate the user's session prematurely!

    return supabaseResponse
}