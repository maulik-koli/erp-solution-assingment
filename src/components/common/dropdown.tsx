import React from 'react'
import Icon, { IconType } from '../icons'
import { 
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@ui/dropdown-menu'

interface DropdownProps {
    trigger: React.ReactNode
    items: Array<{
        label: string
        onClick: () => void
        icon?: IconType
        isSeparator?: boolean
    }>
}


const Dropdown: React.FC<DropdownProps> = ({ trigger, items }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className='cursor-pointer'>
                {trigger}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    {items.map((item, index) => (
                        <React.Fragment key={`${item.label}-${index}`}>
                            <DropdownMenuItem onSelect={item.onClick} className='cursor-pointer'>
                                {item.icon && <Icon name={item.icon} width={16} height={16} className="mr-2 inline-block" />}
                                <span className='text-sm font-normal text-foreground mt-0.5'>{item.label}</span>
                            </DropdownMenuItem>
                            {item.isSeparator && <DropdownMenuSeparator className='my-1' />}
                        </React.Fragment>
                    ))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Dropdown
