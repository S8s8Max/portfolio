import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';

import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#7c88cc",
      main: '#5c6bc0',
      dark: "#404a86",
    },
    secondary: {
      main: '#303f9f',
    },
  },
});

const useStyles = makeStyles((theme) => ({
    root: {
        width: '500',
        height: "110%",
    },
    profileContent: {
        backgroundColor: theme.palette.primary.light,
    },
    profileAgeTableTitle: {
        backgroundColor: theme.palette.primary.main,
        paddingTop: 8,
        paddingBottom: 8,
        color: "whitesmoke",
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
        position: "relative"
    },
      actionsContainer: {
        marginBottom: theme.spacing(2),
    },
      resetContainer: {
        padding: theme.spacing(3),
    },
}));

function getSteps() {
    const history = [
        "1998 June 16", "2017 Mar.", "2017 Apr.", "2019 Sept.", "2020 Apr.", "2020 July", "2020 Oct.",
    ];
    return history;
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return "島根県にて、生を受ける。";
        case 1:
            return "島根県立松江南高校を卒業。";
        case 2:
            return "大阪市立大学経済学部に入学。";
        case 3:
            return "大学を休学してシアトルに留学する。\nシアトルにあるワシントン大学の語学プログラムを受ける。そこで、CS専攻の学生と出会うことで計算機科学の面白さに目覚め、Pythonを触り始める。";
        case 4:
            return "留学から帰還。\nエンジニア関連のインターンやアルバイトを探し始める。ソフトウェア、Web、機械学習など、色々な業種に興味を持ち始める。";
        case 5:
            return "株式会社コンビーズのアルバイトプログラマーとなる。\n業務はフルスタックで、フロント・バック関係なく仕事を割り振られる。Pythonで競合他社の動向を監視するバッチを作成することもあった。";
        case 6:
            return "就職活動開始。";

        default:
            return "";
    }
}

export default function ProfileContent() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const totalSteps = () => {
        return steps.length;
    };
    const doneLastStep = () => {
        return activeStep === totalSteps();
    };
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
    const handleReset = () => {
        setActiveStep(0);
    }

    return (
        <div className={classes.root}>
            <Card
                elevation={8}
            >
            <Typography
                className={classes.profileAgeTableTitle}
                varient="h6"
            >
                Age Table
            </Typography>
            <Stepper
                activeStep={activeStep}
                orientation="vertical"
                elevation={10}
                style={{width:500, height:"100%"}}
                >
                {steps.map((label, index) => (
                <Step key={label}>
                    <StepLabel>
                        <Typography
                            align="left"
                        >
                            {label}
                        </Typography>
                    </StepLabel>
                    <StepContent>
                        <Card
                            className={classes.profileContent}
                        >
                        <Typography
                            varient="p"
                            style={{alignItems:"left", paddingLeft:7, paddingRight:7, color:"whitesmoke"}}
                        >
                            {getStepContent(index).split("\n").map((t) => {
                                return <p>{t}</p>
                            })}
                        </Typography>
                        </Card>
                    </StepContent>
                </Step>
                ))}
                {doneLastStep() ? (
                    <Paper square elevation={0} className={classes.resetContainer}>
                    <Button onClick={handleReset} className={classes.button}>
                        Reset
                    </Button>
                    </Paper>
                ) : (
                <div className={classes.actionsContainer}>
                    <div>
                        <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className={classes.button}
                        >
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                        >
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </div>

                </div>
                )}
            </Stepper>
            </Card>
        </div>
    );

}
/**
 * "Do not go gentle into that good night."- Dylan Marlais Thomas(1914 - 53)
 *
 * I am Kippei Watanabe. I'm a student of Osaka City University.
                                    This is my portfolio site which is made by Django + React.
 */
