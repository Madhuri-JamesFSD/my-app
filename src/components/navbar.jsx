const Navbar = () = {
    return (
    <div className = {style.container}>
            <div style={{ fontSize: "1.5rem" }}>LOGO</div>
    <div className={styles.links}>
    <a href= "#" style={{textDecoration: "none", color : "blue" }}>Home</a>
    <a href= "#" style={{textDecoration: "none", color : "blue" }}>Explore</a>
    <a href= "#" style={{textDecoration: "none", color : "blue" }}>More</a>
    </div>
    </div>
    );
};

export default Navbar;