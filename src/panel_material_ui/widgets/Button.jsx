import Button from "@mui/material/Button"

export function render(props, ref) {
  const {data, el, model, view, ...other} = props
  const [color] = model.useState("color")
  const [disable_elevation] = model.useState("disable_elevation")
  const [disabled] = model.useState("disabled")
  const [end_icon] = model.useState("end_icon")
  const [href] = model.useState("href")
  const [icon] = model.useState("icon")
  const [icon_size] = model.useState("icon_size")
  const [label] = model.useState("label")
  const [loading] = model.useState("loading")
  const [size] = model.useState("size")
  const [variant] = model.useState("variant")
  const [sx] = model.useState("sx")
  const [target] = model.useState("target")

  if (Object.entries(ref).length === 0 && ref.constructor === Object) {
    ref = undefined
  }

  return (
    <Button
      color={color}
      disableElevation={disable_elevation}
      disabled={disabled}
      endIcon={end_icon && (
        end_icon.trim().startsWith("<") ?
          <span style={{
            maskImage: `url("data:image/svg+xml;base64,${btoa(end_icon)}")`,
            backgroundColor: "currentColor",
            maskRepeat: "no-repeat",
            maskSize: "contain",
            width: icon_size,
            height: icon_size,
            display: "inline-block"}}
          /> :
          <Icon style={{fontSize: icon_size}}>{end_icon}</Icon>
      )}
      fullWidth
      href={href}
      loading={loading}
      loadingPosition="start"
      onClick={() => model.send_event("click", {})}
      ref={ref}
      startIcon={icon && (
        icon.trim().startsWith("<") ?
          <span style={{
            maskImage: `url("data:image/svg+xml;base64,${btoa(icon)}")`,
            backgroundColor: "currentColor",
            maskRepeat: "no-repeat",
            maskSize: "contain",
            width: icon_size,
            height: icon_size,
            display: "inline-block"}}
          /> :
          <Icon style={{fontSize: icon_size}}>{icon}</Icon>
      )}
      size={size}
      sx={{height: "100%", ...sx}}
      target={target}
      variant={variant}
      {...other}
    >
      {label}
    </Button>
  )
}
