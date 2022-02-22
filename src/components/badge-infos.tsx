import { Link } from 'gatsby'
import React from 'react'
import { InfoBadge } from '../types/types'

export default function BadgeInfos({ options }: { options: InfoBadge }) {
  const aLinkClass = `
    block py-2.5 bg-transparent text-slate-800 rounded-3xl border-slate-100
    dark:border-gray-600 text-sm uppercase dark:text-white tracking-widest${
      options?.customClasses
        ? ` ${options.customClasses}`
        : ' px-5 hover:bg-sky-50 dark:hover:bg-slate-800'
    } transition duration-300 shadow-md md:shadow-none`

  if (options.external || options.url.includes('//')) {
    return (
      <a
        className={aLinkClass}
        href={options.url}
        target={options.targetSelf ? '_self' : '_blank'}
        rel="noopener noreferrer"
      >
        {options.icon && <span className="mr-3">{options.icon}</span>}
        <span>{options.title}</span>
      </a>
    )
  }
  return (
    <Link
      className={aLinkClass}
      to={options.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {options.icon && <span className="mr-3">{options.icon}</span>}
      <span>{options.title}</span>
    </Link>
  )
}