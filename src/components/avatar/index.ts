import React from 'react'
import PropTypes from 'prop-types'

const getInitials = str => {
  if (!str) return null
  const names = str.split(' ')
  let initials = names[0].substring(0, 1).toUpperCase()

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase()
  }

  return initials
}


interface Props {
  name?:string
}

const Avatar = React.forwardRef((props, ref) => {
  const { name, isLoading, ...rest } = props

  return (
    <div
      {...rest}
      ref={ref}
      disabled={isLoading}
      className={`bg-blue-500 text-sm text-white font-semibold h-10 w-10 flex items-center justify-center rounded-lg ${
        isLoading ? 'animate-pulse' : undefined
      }`}
    >
      {!isLoading && <StyledLabel>{getInitials(name)}</StyledLabel>}
    </div>
  )
})

export default Avatar
