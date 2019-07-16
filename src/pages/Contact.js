import React from "react";

const Contact = () => (
    <div className="Contact-info">
        <h1 style={{textAlign: "center"}}>Contact</h1>
        <hr></hr>
        <table className="info-table">
            <tr>
                <td>Phone:</td>
                <td>555-555-5555</td>
            </tr>
            <tr>
                <td>email:</td>
                <td>email@website.com</td>
            </tr>
            <tr>
                <td>GitHub:</td>
                <td><a href="#">www.hereisalinktogithub.com</a></td>
            </tr>
            <tr>
                <td>LinkedIn:</td>
                <td><a href="#">www.workrelatedsocialmedialink.com</a></td>
            </tr>
        </table>
        <br></br>
        <br></br>
    </div>
)

export default Contact;