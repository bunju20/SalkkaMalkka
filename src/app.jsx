import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../src/components/home/home";
import Countries from "../src/components/countries/countries";
import GlobalStyle from "./common/css/globalStyle";
import Options from "./components/options/option";
import OnBoarding from "./components/onbording/onboarding";
const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/onboarding">
                    {" "}
                    {/* 새로운 경로로 OnBoarding 페이지를 추가합니다. */}
                    <OnBoarding />
                </Route>
                <Route exact path="/tripMBTI">
                    <Options />
                </Route>
                <Route path="/result/:countryName" component={Countries} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
