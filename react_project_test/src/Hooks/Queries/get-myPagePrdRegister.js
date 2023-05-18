import { useQuery } from '@tanstack/react-query'
import QUERY_KEY from '../../Consts/query.key'
import MyPageApi from '../../Apis/mypageApi'

const getMyPageMainData = async () => {
	const res = await MyPageApi.productList()
	return res.data
}

const useGetMyPagePrdRegisterData = () => {
	const { data, error, status, isLoading, isError } = useQuery(
		[QUERY_KEY.GET_MYPAGE_MAIN_DATA],
		() => getMyPageMainData(),
	)

	return { data, error, status, isLoading, isError }
}
export default useGetMyPagePrdRegisterData
