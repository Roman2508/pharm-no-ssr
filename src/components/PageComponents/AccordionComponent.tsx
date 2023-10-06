import React from 'react'
import cn from 'classnames'

import { Accordion } from '../ui/Accordion/Accordion'

interface IAccordionComponentProps {
  component: any
  colSize: string
}

const AccordionComponent: React.FC<IAccordionComponentProps> = ({ component, colSize }) => {
  return (
    <div className={cn({ ['container']: colSize === 'col-12' })} key={component.id}>
      <Accordion title={component.title} defaultOpen={component.default_open}>
        <div dangerouslySetInnerHTML={{ __html: component.body }} />
      </Accordion>
    </div>
  )
}

export default AccordionComponent
