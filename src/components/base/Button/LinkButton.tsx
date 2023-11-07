import './LinkButton.scss'

interface Props {
  href: string;
  text: string;
  className?: string;
  target?: string;
}

export default function LinkButton(props: Props) {
  const { href, text, className, target = "_blank" } = props;
  return (
    <a
      href={href}
      target={target}
      className={`${className} button`}>
        {text}
    </a>

  )
}
