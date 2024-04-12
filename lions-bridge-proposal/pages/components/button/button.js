function Button({
                  key = 1,
                  text = null,
                  type,
                  onClick = null,
                  tabIndex = 0,
                  className,
                  isDisabled = false,
}) {

  return (
      <button className={className}
              key={key}
              type={type}
              onClick={onClick}
              tabIndex={tabIndex}
              disabled={isDisabled}
      >
        { text }
      </button>
  );
}

export default Button;