import { HoverLink } from "./hoverLink"
const SectionTitle = ({
  subtitle,
  heading,
  href,
  linkText,
}: {
  subtitle?: string
  heading: string
  href?: string
  linkText?: string
}) => {
  return (
    <div className={"mb-6 flex flex-col items-center px-2 text-center"}>
      <span className="text-base-regular mb-2 opacity-60">{subtitle}</span>
      <p className="mb-4 max-w-lg text-2xl">{heading}</p>
      {href && linkText && (
        <HoverLink
          href={href}
          text={linkText}
          className={
            "underline-offset-4md:inline-block block text-lg md:text-sm"
          }
        />
      )}
    </div>
  )
}

export default SectionTitle
