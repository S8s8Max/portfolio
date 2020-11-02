import React from "react";
import News from "./News";
import Picture from "./Picture";

class Works extends React.Component {
    render () {
        return (
            <div className="works">
                <News/>
                <Picture/>
            </div>
        )
    }
}
export default Works;
