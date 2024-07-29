"use client";

import React from "react";
import {Button, IconButton} from "@mui/material";
import {ArrowForward} from "@mui/icons-material";

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
        <IconButton aria-label="Next" onClick={nextStep} size="large" className="">
            <ArrowForward />
        </IconButton>

    </div>
);

const AccountSetup: React.FC<{ nextStep: () => void; prevStep: () => void }> = ({nextStep, prevStep}) => (
    <div className="flex flex-col justify-between items-center">
        <h1 className="text-4xl m-10">Admin Account Creation</h1>

        {/*<AccountCreateComponent />*/}

    </div>
);
