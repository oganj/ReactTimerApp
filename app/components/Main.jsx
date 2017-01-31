/**
 * Created by OgnjenVulic on 1/16/2017.
 */
var React = require('react');
var Navigation = require('Navigation');

var Main = (props)=>{
        return (
            <div>
                <Navigation/>
                <div >
                    <div>
                        <p>Main.jsx render </p>
                        {props.children}
                    </div>
                </div>
            </div>
        );
};

module.exports = Main;