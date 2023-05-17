import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default (props) => {
  const {
    buttonValue,
    buttonIcon,
    onClick,
    inputRef,
    buttonRef,
    ...textFieldAttr
  } = props;

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <TextField inputRef={inputRef} {...textFieldAttr} />
      <Button
        variant="outlined"
        startIcon={buttonIcon}
        onClick={onClick}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translate(0, -50%)",
        }}
        ref={buttonRef}
        disabled={textFieldAttr.disabled}
      >
        {buttonValue}
      </Button>
    </div>
  );
};
