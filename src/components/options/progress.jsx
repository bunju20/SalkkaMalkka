const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
        height: "32px",
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50,
        border: "4px solid #EBD6FF",
    };

    const fillerStyles = {
        height: "100%",
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: "inherit",
        textAlign: "right",
    };

    const labelStyles = {
        padding: 4,
        color: "white",
        fontWeight: "bold",
    };

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{}</span>
            </div>
        </div>
    );
};

export default ProgressBar;
