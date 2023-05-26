import styled from 'styled-components'
import Images from './Components/Images'
import { WidthAutoCSS } from '../../Styles/common'
import { useState } from 'react'
import Inputs from './Components/Inputs'
import { useParams } from 'react-router-dom'
import ProductApi from '../../Apis/productApi'
import { useQuery } from '@tanstack/react-query'
import QUERY_KEY from '../../Consts/query.key'

function Register() {
	const [imageFile, setImageFiles] = useState('')
	const [imageList, setImageList] = useState([])

	const { prod_idx } = useParams()

	const getProductDetailData = async () => {
		const res = await ProductApi.detail({ prod_idx })
		return res.data
	}

	const useGetProductDetailData = () => {
		const { data } = useQuery(
			[QUERY_KEY.GET_PRODUCT_DETAIL_DATA, prod_idx],
			() => getProductDetailData(),
			{
				enabled: !!prod_idx,
			},
		)
		return { data }
	}

	const { data: DetailData } = useGetProductDetailData()

	return (
		<S.Wrapper>
			<Images
				setImageFiles={setImageFiles}
				setImageList={setImageList}
				imageList={imageList}
				DetailData={DetailData}
			/>
			<Inputs
				imageFile={imageFile}
				DetailData={DetailData}
				setImageList={setImageList}
				imageList={imageList}
			/>
		</S.Wrapper>
	)
}

export default Register

const Wrapper = styled.div`
	${WidthAutoCSS}
`

const S = { Wrapper }
