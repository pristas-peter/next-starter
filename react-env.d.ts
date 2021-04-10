import React from 'react'

declare module 'react' {
  type PropsOf<
    ComponentType extends React.ComponentType<any>
  > = ComponentType extends React.ComponentType<infer TProps> ? TProps : never
}
