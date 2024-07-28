"use client";

import React from "react";

export default function SetupPage() {
    const [step, setStep] = React.useState(0);

    const nextStep = () => setStep((prevStep) => prevStep + 1);
    const prevStep = () => setStep((prevStep) => prevStep !<= 0 ? prevStep - 1 : 0);

    const renderStep = () => {
        switch (step) {
            case 0:
                return <WelcomePage nextStep={nextStep} prevStep={prevStep} />
            case 1:
                return <AccountSetup nextStep={nextStep} prevStep={prevStep} />
            default:
                setStep(0);
                return <WelcomePage nextStep={nextStep} prevStep={prevStep} />

        }
    }

    return (
        <main className="w-screen h-screen flex flex-1 justify-center items-center">
            {renderStep()}
        </main>
    )
}

const WelcomePage: React.FC<{ nextStep: () => void; prevStep: () => void }> = ({nextStep, prevStep}) => (
    <div className="flex flex-col justify-between items-center h-[30vh]">
        <h1 className="text-7xl">Welcome!</h1>
        {/*<Button variant="link" onClick={nextStep}><p className="m-16 text-3xl hover:underline decoration-2">Get started {"->"}</p></Button>*/}

    </div>
);

const AccountSetup: React.FC<{ nextStep: () => void; prevStep: () => void }> = ({nextStep, prevStep}) => (
    <div className="flex flex-col justify-between items-center">
        <h1 className="text-4xl m-10">Admin Account Creation</h1>

        {/*<AccountCreateComponent />*/}

    </div>
);
