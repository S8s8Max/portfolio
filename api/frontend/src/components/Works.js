import React from "react";
import Picture from "./Picture";

// ProductができるまではPictureだけ表示
class Works extends React.Component {
    render () {
        return (
            <div className="works">
                <Picture/>
            </div>
        )
    }
}
export default Works;
