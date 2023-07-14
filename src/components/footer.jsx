import custom from "../styles/footer.module.css";

function Footer() {
    const customStyles = {
        color: "white",
        fontSize: "2rem",
    };
    return (
        <div className={custom.container}>
            <div style={customStyles}>Copyrite 2023</div>
        </div>
    );
}

export default Footer;