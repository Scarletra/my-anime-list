import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) => {
    return (
      <div className="flex flex-row justify-between p-2">
        <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
        { linkHref && linkTitle 
          ?
          <Link href={linkHref} className="p-1 underline text-color-primary hover:text-color-accent">
              {linkTitle}
          </Link>
          :
          null
        }
      </div>
    )
}

export default Header