function Button({
                  key = 1,
                  text,
                  onClick = null,
                  className,
                  type,
                  tabIndex = 0 }) {
  return (
      <button className={className}
              key={key}
              onClick={onClick}
              type={type}
              tabIndex={tabIndex}
      >
        { text }
      </button>
  );
}

export default Button;