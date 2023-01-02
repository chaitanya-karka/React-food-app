import React, { useContext, useEffect } from 'react'
import Header from '../components/header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setFoodList } from '../redux/slices/slice';
function Home() {

    const count = useSelector((state) => state.mainslice.foodList)
    const isLog = useSelector((state) => state.mainslice.isLog)
    const dispatch = useDispatch()

    let brands = [
        {
            hotel_name: 'KFC',
            img_url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
            food: [
                {
                    id: 1,
                    name: 'Chicken Biriyani',
                    price: 220,
                    currency: 'INR',
                    category: "lunch",
                    type: "Non-Veg",
                    brand: 'KFC',
                    url: "https://geekrobocook.com/wp-content/uploads/2021/03/Tandoori-chicken-biryani.jpg"
                },
                {
                    id: 2,
                    name: 'Chicken chops',
                    price: 170,
                    currency: 'INR',
                    category: "gravy",
                    type: "Non-Veg",
                    brand: 'KFC',
                    url: "https://www.yummytummyaarthi.com/wp-content/uploads/2017/08/IMG_5752-500x500.jpg"
                },
                {
                    id: 3,
                    name: 'Mutton Biriyani',
                    price: 220,
                    currency: 'INR',
                    category: "lunch",
                    type: "Non-Veg",
                    brand: 'KFC',
                    url: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg"
                },
                {
                    id: 4,
                    name: 'Chicken Burgger',
                    price: 110,
                    currency: 'INR',
                    category: "Snacks",
                    type: "Non-Veg",
                    brand: 'KFC',
                    url: "https://hips.hearstapps.com/hmg-prod/images/190416-chicken-burger-082-1556204252.jpg"
                },
            ]
        },
        {
            hotel_name: 'Arya Bhavan',
            img_url: "https://media-cdn.tripadvisor.com/media/photo-s/09/30/76/df/best-veghotel.jpg",
            food: [
                {
                    id: 1,
                    name: 'Idly',
                    price: 15,
                    currency: 'INR',
                    category: 'Tiffen',
                    type: 'Veg',
                    brand: 'Arya Bhavan',
                    url: "https://inemai.com/wp-content/uploads/2019/02/idly.jpg"
                },
                {
                    id: 2,
                    name: 'Dhosa',
                    price: 75,
                    currency: 'INR',
                    category: 'Tiffen',
                    type: 'Veg',
                    brand: 'Arya Bhavan',
                    description:'Crispy, savory and slightly sour, dosa is the South Indian counterpart to crepes.',
                    url: "https://b.zmtcdn.com/data/reviews_photos/1e2/19f261b43d11344ce5f483c20a0941e2_1561214851.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                },
                {
                    id: 3,
                    name: 'Meals',
                    price: 120,
                    currency: 'INR',
                    category: 'Lunch',
                    type: 'Veg',
                    brand: 'Arya Bhavan',
                    url: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hjpbgpuoarzjiyarrqy5"
                },
                {
                    id: 4,
                    name: 'Fried rice',
                    price: 140,
                    currency: 'INR',
                    category: 'Lunch',
                    type: 'Veg',
                    brand: 'Arya Bhavan',
                    url: "https://www.veganricha.com/wp-content/uploads/2022/01/Indo-Chinese-Fried-Rice-0754-500x375.jpg"
                }
            ]
        },
    ]
  
    useEffect(() => {
        dispatch(setFoodList(brands));
    }, [])

    return (
        <div className='main-view mt-5'>
            <Header />
            <h4 className="my-5">Top brands for you</h4>
            <div className="brands row m-0 ">
                {brands.map((val) => {
                    return (
                        <>
                            <div className="container mt-5 col-5">
                                <div className="">
                                    <Link to={`/view/${val.hotel_name}`} ><img className='img-brands'
                                        src={val.img_url} /></Link>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{val.hotel_name}</h5>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Home