import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../src/components/home/home";
import Countries from "../src/components/countries/countries";
import GlobalStyle from "./common/css/globalStyle";
import Options from "./components/options/option";
import OnBoarding from "./components/onbording/onboarding";
import SliderScreen from "./components/slider/slider";
import ReactGA from "react-ga4";
import RouteChangeTracker from "./components/RouteChangeTracker";
import { Routes } from "react-router-dom";

const App = () => {
    RouteChangeTracker();
    return (
        <>
            <GlobalStyle />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/onboarding">
                    <OnBoarding />
                </Route>
                <Route exact path="/tripMBTI">
                    <Options />
                </Route>
                <Route exact path="/slider">
                    <SliderScreen />
                </Route>
                <Route path="/result/:countryName" component={Countries} />
            </Switch>
        </>
    );
};

export default App;
