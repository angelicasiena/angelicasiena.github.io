import React from 'react';
import { Box, Container, Flex, Link, Text } from '@chakra-ui/react';
import logo from '../siena-logo.svg';

type HeaderProps = {
    showLogo?: true
}

type HeaderLinkType = {
    linkName: string,
    href: string,
    isActive: boolean
}

const HEADER_LINKS: HeaderLinkType[] = [{
    linkName: 'ABOUT',
    href: '/about',
    isActive: false
},
{
    linkName: 'SERVICES',
    href: '/services',
    isActive: false
},
{
    linkName: 'CONTACTS',
    href: '/contacts',
    isActive: false
}];

function Header(headerProps: HeaderProps) {
    return (
        <Box bg="#0C4762">
            <Container maxW='90vw' max-height={100} margin='auto'>
                <Flex justifyContent={headerProps.showLogo ? 'space-between' : 'end'}>
                    {headerProps.showLogo && (
                        <Box>
                            <Flex height={100} alignItems="center" fontWeight='bold' fontSize={20}>
                                <img src={logo} alt="logo" width={80} />
                                <Text pl={10}>Siena Abaya</Text>
                            </Flex>
                        </Box>
                    )}
                    <Box>
                        <Flex height={100} alignItems="center" fontWeight='bold' fontSize={20}>
                            {HEADER_LINKS.map((headerLink) =>
                                <Link href={headerLink.href} pl={50} fontSize={24} textDecoration='none' color="#F4EEEE">{headerLink.linkName}</Link>
                            )}
                        </Flex>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}

export default Header;
