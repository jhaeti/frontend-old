import axios from "axios";
import Link from "next/link";
import {
    Container,
    Main,
    Title,
    Description,
} from "../components/sharedstyles";
import { fetchAllProducts } from "../features/products/productSlice";
import { wrapper } from "../features/store";
import { useAppDispatch } from "../features/store/hooks";

 function about() {
    const dispatch = useAppDispatch()
    return (
        <Container>
            <Main>
                <Title>About Page</Title>
                <Description>
                    <Link href="/">
                        <a>&larr; Go Back to where ever you came from</a>
                    </Link>
                </Description>
                <button>Fetch produts</button>
            </Main>
        </Container>
    );
}

// about.getInitialProps = async (ctx) => {
//     const { data } = await axios("http://localhost:5000/products");
//     // console.log(data);
//     return { stars: data };
// };
about.getInitialProps = wrapper.getServerSideProps(({ dispatch }) => asyn(dispatch)=> {
    await dispatch(fetchAllProducts())
})

export default about