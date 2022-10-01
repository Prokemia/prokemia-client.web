import React,{useState} from 'react'
import {InputGroup,Input,InputRightElement,Stack,Flex,Text,Center,Image,Tabs,TabList,TabPanels,Tab,TabPanel,useToast,Button} from '@chakra-ui/react';
import {Visibility,VisibilityOff} from '@mui/icons-material';
import styles from '../styles/Home.module.css';

function Auth(){
	return(
		<Flex className={styles.authbody}>
			<Stack bg='#000' w='50%' h='100vh' className={styles.authsection1}>
				<Center m='auto'>
					<Text fontWeight='ClearSans-Bold' fontSize='32px' color='#009393'>Prok<span style={{color:'#fff'}}>emia</span></Text>
				</Center>
			</Stack>
			
			<Center p='1' bg='#eee' m='auto' className={styles.authsection2} >
			<Tabs mt='' isFitted variant='enclosed' w='300px'>
				<TabList>
					<Tab>Log In</Tab>
					<Tab>Register</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<SignIn />
					</TabPanel>
					<TabPanel>
						<Register />
					</TabPanel>
				</TabPanels>
			</Tabs>
			</Center>
		</Flex>
	)
}

export default Auth;

const Register=()=>{
	const [show,setShow] = useState(false);
	const handleClick = ()=> setShow(!show);
	return(
		<Flex direction='column' gap='2'>
			<InputGroup>
				<Input type='text' placeholder='First-Name' variant='flushed'/>
			</InputGroup>
			<InputGroup>
				<Input type='text' placeholder='Last Name' variant='flushed'/>
			</InputGroup>
			<InputGroup>
				<Input type='email' placeholder='Email' variant='flushed'/>
			</InputGroup>
			<InputGroup>
				<Input type='number' placeholder='Mobile' variant='flushed'/>
			</InputGroup>
			<InputGroup>
				<Input type='text' placeholder='Company' variant='flushed'/>
			</InputGroup>
			<InputGroup>
				<Input type={show ? 'text' : 'password'} placeholder='Enter Password' variant='flushed'/>
				<InputRightElement>
					<Button onClick={handleClick}>
						{show ? <VisibilityOff/> : <Visibility/>}
					</Button>
				</InputRightElement>

			</InputGroup>
			<Button bg='#009393' color='#fff'> Register </Button>
		</Flex>
	)
}

const SignIn=()=>{

	const [show,setShow]=useState(false);
	const handleClick =()=> setShow(!show);

	return(
		<Flex direction='column' gap='2'>
			<InputGroup>
				<Input type='text' placeholder='Email' variant='flushed'/>
			</InputGroup>
			<InputGroup>
				<Input type={show ? 'text' : 'password'} placeholder='Enter Password' variant='flushed'/>
				<InputRightElement>
					<Button onClick={handleClick}>
						{show ? <VisibilityOff/> : <Visibility/>}
					</Button>
				</InputRightElement>

			</InputGroup>
			<Button bg='#009393' color='#fff'>Sign In</Button>
			<Text cursor='pointer' fontSize='14px' color='red'> Forgot Password? click here to reset.</Text>
		</Flex>
	)
}
