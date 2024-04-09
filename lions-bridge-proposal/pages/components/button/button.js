function Button({
                  key = 1,
                  text,
                  type,
                  onClick = null,
                  tabIndex = 0,
                  className,
                  isDisabled = false,
}) {
  return (
      <button className={className}
              key={key}
              onClick={onClick}
              type={type}
              tabIndex={tabIndex}
              disabled={isDisabled}
      >
        { text }
      </button>
  );
}

export default Button;