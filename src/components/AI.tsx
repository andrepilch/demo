import {
  Section,
  SectionContent,
  SectionHeader,
} from './Section'
import { H2 } from './Text'

export function AI() {
  return (
    <Section>
      <SectionContent>
          <SectionHeader>
            <H2 style={{ color: '#00aeef' }}>I use AI to build the right products. <br />I do not use AI to tell me what that product should be.</H2>
          </SectionHeader>
        </SectionContent>
    </Section>
  )
}
