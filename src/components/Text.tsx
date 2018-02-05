/* tslint:disable:no-any*/
/// <reference path="../@types/styled-system/index.d.ts" />

import styled from 'styled-components'
import {
  space,
  color,
  fontSize,
  fontWeight,
  width,
  textAlign
} from 'styled-system'

export const Text: any = styled.div`
  ${width}
  ${space}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${textAlign}
`