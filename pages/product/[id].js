import React,{useState} from 'react'
import {Flex,Text,Button} from '@chakra-ui/react'
import {useRouter} from 'next/router'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LanguageIcon from '@mui/icons-material/Language';
import styles from '../../styles/Home.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DescriptionIcon from '@mui/icons-material/Description';
import QuotationModal from '../../components/modals/Quotation.js';
import SampleModal from '../../components/modals/Sample.js';
import Header from '../../components/Header.js';

function Product(){
	const router = useRouter();
	const id = router.query;
	const [isquotationModalvisible,setisquotationModalvisible]=useState(false);
	const [issampleModalvisible,setissampleModalvisible]=useState(false);
	return(
		<Flex  direction='column'>
			<QuotationModal isquotationModalvisible={isquotationModalvisible} setisquotationModalvisible={setisquotationModalvisible}/>
			<SampleModal issampleModalvisible={issampleModalvisible} setissampleModalvisible={setissampleModalvisible}/>
			<Header/>
			<Flex direction='column' gap='2' className={styles.productbody}>
				<Flex p='' direction='column' gap='2' className={styles.productsection1}>
					<Text fontFamily='ClearSans-Bold' fontSize='32px'>{id.id}</Text>
					<Flex>
						<Text>Manufactured by:</Text>
						<Text color='grey'>INC Manufacturers</Text>
					</Flex>
					<Flex>
						<Text>Distributed by:</Text>
						<Text color='grey'>Zoho Distributors limited</Text>
					</Flex>
					<Flex direction='column'>
						<Text color='#000' fontWeight='bold'>Description</Text>
						<Text >Luna-cure PACM is a cycloaliphatic diamine. Luna-cure PACM is mainly used as a hardener for epoxies. The curing of epoxy resins at high temperatures leads to excellent mechanical properties and good resistance against alkalis, acids, hydrocarbon solvents and water. This product is available in Europe, Asia and North America.</Text>
						<Text mt='4'>Chemical Name: 4,4-Diaminodicyclohexyl methane
						Function: Curing & Hardening Agent, Monomer
						CAS Number: 1761-71-3
						Chemical Family: Diamines</Text>
					</Flex>
					<Flex>
						<Text>Expiring on:</Text>
						<Text color='#009393'>2023-05-23</Text>
					</Flex>
					<Flex direction='column' gap='2' mt='2'>
						<Button bg='grey' borderRadius='0' color='#fff'><FileDownloadIcon />Product Data Sheet</Button>
						<Button bg='grey' borderRadius='0' color='#fff'><FileDownloadIcon />Safety Data Sheet</Button>
						<Button bg='grey' borderRadius='0' color='#fff'><FileDownloadIcon />Formulation Document</Button>
					</Flex>
					<Flex direction='column' bg='#e5e5e5' borderRadius='1' p='1'>
						<Text fontWeight='bold'>Features & Benefits</Text>
						<Text>Luna-cure PACM is a cycloaliphatic diamine. Luna-cure PACM is mainly used as a hardener for epoxies. The curing of epoxy resins at high temperatures leads to excellent mechanical properties and good resistance against alkalis, acids, hydrocarbon solvents and water. This product is available in Europe, Asia and North America.</Text>
					</Flex>
					<Flex direction='column' bg='#e5e5e5' borderRadius='1' p='1'>
						<Text fontWeight='bold'>Applications and benefits</Text>
						<Text>Luna-cure PACM is a cycloaliphatic diamine. Luna-cure PACM is mainly used as a hardener for epoxies. The curing of epoxy resins at high temperatures leads to excellent mechanical properties and good resistance against alkalis, acids, hydrocarbon solvents and water. This product is available in Europe, Asia and North America.</Text>
					</Flex>
					<Flex direction='column' bg='#e5e5e5' borderRadius='1' p='1'>
						<Text fontWeight='bold'>Packaging</Text>
						<Text>IBC 1570 kg and as bulk</Text>
					</Flex>
					<Flex direction='column' bg='#e5e5e5' borderRadius='1' p='1'>
						<Text fontWeight='bold'>Storage & Handling</Text>
						<Text>Amicult K 42 preferrably to be stored above 0c,as crystalization temperature for productis -O c.</Text>
					</Flex>
				</Flex>
				<Flex p='2' gap='2' className={styles.productsection2} direction='column'>
					<Button color='#000' borderRadius='0' bg='#e5e5e5'><FavoriteIcon />Add to WishList</Button>
					<Button color='#fff' borderRadius='0' bg='#009393' onClick={(()=>{setisquotationModalvisible(true)})}><DescriptionIcon />Request Quotation</Button>
					<Button color='#fff' borderRadius='0' bg='#000' onClick={(()=>{setissampleModalvisible(true)})}><DescriptionIcon />Request Sample</Button>
					<Text textAlign='center'>or</Text>
					<Button bg='#fff' borderRadius='0' border='1px solid #000' p='1'>Contact</Button>
					<Button bg='#fff' borderRadius='0' border='1px solid #000' p='1'><LanguageIcon />Visit Website</Button>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default Product;