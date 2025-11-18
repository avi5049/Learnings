import React,{useState} from 'react'
import { X } from 'lucide-react';


const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()

    const addTask = [...task]

    addTask.push({title,details})
    setTask(addTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx)=>{
    const addTask = [...task]
    addTask.splice(idx,1)
    setTask(addTask)
  }


  return (
    <div className='bg-black lg:flex text-white h-screen '>

      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 flex-col items-start p-10'>
          <h1 className='text-3xl font-bold'>Add Notes</h1>

          <input 
            type='text'
            placeholder='Enter Notes Heading'
            className='px-5 py-2 w-full font-medium border-2 outline-none rounded'
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value);
            }}
          />
          <textarea 
            type='text'
            placeholder='Write Details here'
            className='px-5 py-2 w-full h-32 font-medium border-2 outline-nonerounded'
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value);
            }}
          />
          <button className='active:scale-98 bg-white text-black font-medium w-full px-5 py-2 outline-none  rounded'>Add Note</button>  
      </form>
      <div id='notes' className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex items-start justify-start gap-5 flex-wrap mt-5 h-[90%] overflow-auto'>
          
          {task.map(function(elem,idx){

            return <div key={idx} className="relative h-55 w-40 bg-cover rounded-xl text-black px-5 py-7 bg-[url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQDxUQEBMWFRUVFxUVFRUVFxUVFRUVFRUWFhUVFxUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGC0mHyYtLTAvLS8tListLzU1Lis1LS0tKzcwNzItLS0rLzctLSsrMS0tLS0tLS0tLSsrLTU1Lf/AABEIAQsAvAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIEBQMGB//EAD8QAAECBAIHBQQJBAIDAQAAAAEAAgMREmEEISIxUXGhsfAFQYGRshRTktEGEyQyM0JSouEjNILBFXJi0vGT/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAIBAwT/xAAgEQEBAAICAgIDAAAAAAAAAAAAAQIRA1EhQRJCMWFx/9oADAMBAAIRAxEAPwD6WRmgNXSlJA4bcx1mtOCMlnQjmtBrxJB1KrYrEtYJk68htJ2Ad5U4kSQmVjUiJiC52dOTcsmTlMz1GaDt9c9+RIHgTLekyDnMmZ4SsukTI5JzQIMTAUge5Dwg5uExJRaZFSJmnCbMoOkJu1d4bFxgq21BGlEl0K4xHADWgUQrIxEQufS5xaBLUZEzn37MuIVqL2nDHfM7G58lnYwPjfcYW7HOMj5d6y1rq7HGGamVOYPvNOqX6muPfbUtFsdsVocwzaVhQyQ8MivcAABoyAMu/iU8DEdBixAwBzRIkDva6eYvrUyt02YzpZBZXaEhKr8xkMi47gAr8SMxzfrBmLa9xC64fBguD3AzH3Zyynr1K0o9m9nNY0HYJCeuXUlohqYSQUntXKA2qIGTkTPOU9QJ1eC7OKq4B32uGLu9DkGmeyDP8QfD/K7s7PI/P+3+VfUZnYgoxuzq20udkbfyq7OxSHTrEgJNbTq29+a15nYiZ2IMx3ZRP5/2/wApf8Sfeft/lakzsRM7EGaOyz+v9v8AKf8Axh/X+3+VoTOxEzsQZh7IPvP2/wAqTeyyPzj4f5WjM7E5nYgzx2af1/t/ldBgj+rh/KtzOxOZ2IM+PhXBpk7h/K8//wAc+NhxFrLnE6Tdkjm0NnIGS9edypROzGGcqmgmZDHloJ7yZLK2MGJiIcNoAmDLVQQRYuJXFsHFRT/TbSNrmy5kcJr1GGwMOH9yG0HbrPmc1ZmdizVNx5l30ciPaPrYuYz0R/vKXgq8DCuw7iHypdm5wbnlqMpzIGxeu8FwxGGDxIj+E+JthYjsp0I/Ww3AjWWSkDfXkVo4ch0OsHYCCJEEyyOdwVA4GM0UAgs2Tk4DYJ5S5d2xWHYf6uCdpLZy1CVLQBuAG9aIJySbqSJWscokKTblU8Gz7VD3u9DloxRSKjrVDBz9phm7vQ5B6NRzspKNNzwQGdkZ2RTc8EU3PBAZ2TzslTc8E5XPBAs7IzsiVzwRTc8EBnZGdkU3PBOVzwQLOyedkpXPBFNzwQGdkZ2RTc8EU3PBAZ2RnZErngnK54IDOyWdk5XPBKm54IGJqv2if6Z3t9QVgC6p9rmUF29vqCCmYwC5HETVGLHGpcpOOYMvNBvR2T3Klg3D2hgH/l6XLQi7O8qjhYVOIZtz9LkG8VGnf5lMqOjZA6d/mUU7/MpaNkZWQOnf5op3+aWVkZWQOnf5lFO/zKWjZGjZA6d/mUU9TS0bIysgdO/zKKd/mlo2RlZA6d/mUU7/ADKWjZGjZA6epop6mUsrIysgdO/zRTv80srI0bIJAKh28fs7v8fW1Xmy7lS7cE8O7e31tQebact6kZbOMv8Aai6FIAnuOQJ1+KlE15iWrJB6dyz4f9wze70uWi/Us6H/AHDN7vS5BtKNW9SUZnZxQFW9FW9EzsRM7EBUireiZ2JzOxAqt6Kt6JnYiZ2ICreipEzsTmdiBVb0Vb0TOxOZ2IFVvRVvRM7ETOxAVb0Vb05nYlM7EBUireiZ2ImdiBgqh2+wuw7gNreD2lXwq/aQ/pH/AB9QQeYhMcTI7xvHdLv71cw0Cps3tBN9auQ4ciu6Cw5Z0P8AuGb3ely0XFZsN32lm93pcg21HNSUZX5IDNGaJX5IlfkgM0ZolfkiV+SAzRIolfkiV+SAzRmiV+Scr8kCzRmiV+SJX5IDNGaJX5IlfkgM0ZolfkiV+SAzRmiV+SJX5IGJrhj/AMM+HqC7gXXDHfhnePUEFVgU1FupSkgk92SzoH9yze70OV6KVmYV9WKZLUC7ixyD0ZUaR0SmVHRtwQOkdEop6mUtG3BGjbggdI6JRSOiUtGyNGyB0jolFI6JS0bI0bcEDpHRKKR0Slo24I0bIHT1MopHRKWjbgjRsgdI6JRSOiUtG3BGjbggdI6JRSOiUjTZGjZA6R0SikdEpaNuCNG3BBIBcMd+GfDmF2bLukuWO/DPhzCCq3UnUudcgmCgjEbOQ2qvh2yxDN7vQ5W4mZl3KrBH2iHvd6XINxRq3qSU7IFVvRVvTnZE7IFUipOdkTsgVW9FW9OdkTsgVW9FSc7InZAqt6Kk52ROyBVb0Vb052ROyBVb0Vb052ROyBVb0Vb052ROyABXDtD8M+HqC7gqr2q6UEm7fUEGfEiSHgq/tJ71GJENPdM6pnmucJ4AkSCe8nv/AIQbLR35+OtU4P8Acs3u9LlYe6epVcMT7Sz/AC9LkG8o52UlGm54IDOyM7IpueCKbnggedks7IpueCKbnggM7Izsim54IpueCAzsjOyKbngiVzwQGdkZ2RTc8EU3PBAZ2RnZFNzwRTc8EBnZPOyVNzwRTc8EDzslnZFNzwRTc8EDE1S7aJEB0trfUFdAuqna7ZwXC7fUEGHBA1nrV5pmHsIFkojZiXd3qH1g7ifAOdxCDbbADQZDXmVSgH7Sze70uWm/UsuC/wC1MF3ehyDeUad/mUyo6NuCB07/ADKKd/mUtGyNGyB09TKKeplLRsjRsgdO/wAyinf5lLRsjRtwQOnf5lFPUylo24I0bIHTv8yinqZS0bI0bIHTv8yinf5lLRtwRo24IHTv8yinf5lLRsjRsgdO/wAyinf5lLRsjRtwQSAVPtgf0Xb2+oK22XdJVe1/wXb2+oIMdzZjNS+rU6AG1HIDMrymJ7YiF5Ie5onkAwuEt4K58nLhxzeVXhhlndR7VuPaQzXN4yGzKeexcIY+0s3u9DlkdnQHOjOhMqaIYk8kkOY1xMgBL75DQKgZZkjunrYV7TiGUSkC5uWoFrXAjwlLwWcXJc5uwz+P1bqjV1IqSjM7F1QKupFFXUiiZ2JzOxAqupFOrqRRM7ETOxAqupFFXUiiZ2ImdiAq6kU6upJTOxOZ2IFV1Ioq6kUTOxEzsQFXUiirf5FEzsRM7EDq6kirqSJnYlM7EDq6kUqupFOZ2JTOxAwVwx4/pnePUF3BVftAyhk7uYQeY+lXaAhQaO93L/6sXAdixXNLnYh8MEzYGtY/QkACSRkZg5Z5AKWJd7ZjAz8rczYDVyLvAL2eHggNGXhsGoDykvPzcOPLdX07YZ3Cf1RxscwRiIrBOI98OFCB1OeYbAzwqe4mzSn2dAEKLBhgzpBEzrcaHTcbkzJ3qvhJx44OtkGt4vFjFxZ8MIj/APQK1AYfamE7Xehy64/nbj7egSzTUZX5Kw80ZpSvyRK/JA80ZolfkiV+SAzRmlK/JEr8kDzRmlK/JOV+SAzRmlK/JOV+SAzRmlK/JEr8kDzRmlK/JEr8kDzRmlK/JEr8kDCxPpfjRCwzhPN0vIEErbG9eC+kUc4vFtgMzExPZSDl5nPc0rLdNk3Xf6J4AtZ9Y/70Q1Gwyy9I8CvUKlhYYEgNQAA3DV8/FXAmMbld1j9lwhCiw4Q9zFc67q4I4DIWCtwj9phi7vS5U8E+eLZeBF4RIE+atwz9qh73ehyzH2lvFRpHRKZUdG3BUHSOiUUjolLRtwRo24IHT1MopHRKWjbgjRtwQOkdEopHRKQptwRo24IHSOiUUjolLRtwRo24IHT1Mop6mUtG3BGjbggdI6JRSOiUtG3BGjbggdI6JRSOiUjTbgjRtwQOnqZRSOiUtG3BGjbggz+3cYIMFxnImYGeraV5T6K4cuqxLgZv+7PubqHAjxcUfS3FfXx24aHqJkZfpBFXmZBenwuEEOBl/wCIG4OEz4mfBTfN0ueJs4bF2AUWMXRUh5js3ETxkPZRGY05idQhRBrs0+RWtCePa4be/SO4UuzKwsRhHQO0IBH3HPd4OMOI0jca5ysVq9mGrGvdsiGGP+rIU/U965Y7nj9tr06jVv8AJSKjM7F1YKt/kirf5ImdiJ2QFW/yRV1JEzsRM7EBVv8AJFVuCJnYiZ2ICrf5Iq6kidkTOxAVb/JFXUkTOxE7ICrf5Iq3+SJnYiZ2ICrqSKupImdiJ2QFXUlT7XxohQXO79Q3q5Oy8P8ATfHmI8Ydh1mn/wBz5ZeKy3TZNuP0UwpjRnYg/mNLLNH5vKo+IXuMW2UOQ1CkcQqH0ewIhQwJahIb/wAx85D/ABV7tF0oRP8A19QWY9tyvpwaclExAuIizCr0OOcvPWqS6dvwJw6x95hDwbtM5eOY8VS7AH9Rp/VEju83RJcJLbxTamEWWN2LlFY39Lnj9rj/ALU/Zvp6dRzspKMrngqYM7IzsnK/JEr8kCzsjOycr8kSvyQLOyM7JyvySlfkgM7J52SlfknK/JAs7J52RK/JEr8kCzsjOycr8kpX5IDOyM7JyvyRK/JBW7QxP1UNzzLIZb+5eD7CgHE4l0c5yNEM9xM83eczuatT6cdoGQgMOkTSP+x7/ATK1Pov2cIUMACVIkN5GfkMvEqMvN0vHxNtqDDpaGjUBJc8eP6Z8PUF3AXHHfhnw5hWhTY1SpTYMlKSDo9qxsOAzFAnLMmZyH3T39a1tlZvaMAVNdeR8VlbGn7XD94z4h80e2Q/eM+IfNZ4wIT9gC1i/wC2Q/eM+JvzR7ZD94z4m/NUPYAl7AEGh7ZD94z4m/NHtkP3jPib81n+wBI4EINE42F7xnxN+aPbYXvGfE35rKOAGxc/YJnUg2PboXvGfE35p+2wveM+JvzWSOzW61MYAbEGn7ZD94z4m/NHtsL3jPib81mHAjYoHBDYg1fbYXvGfE35pHHwhris+NvzWS7BBUMXA/K0b/8A718g9I3tGCdUWGf82/Nc8V2rBYwuMVmQ/W35rz8DswN/2sP6VvDGiG3WSMtpOQH+0EsA72nFujuILIcw0zyLj94z2ahOxXu4GLgsaG/Ww8u+tuZ7zr2rzPYnZ4ZAbDFibk9T8VpN7MbsUY9rz6bIx0L3jPib81HExmuYQ1zTq1EHvCzG9nN2KxCw4arQ7tTQESQTaVzxUOppCm1SKDh2fGD4YcLjxBIPEKyosYAMgBrOW05kqSRtBXMvUIrs1GGEYsBEkBIoIuQ1iYTKBEIQUkEXia5PfSM11cuEpoK7opM+7vUILJ5q65o2Lg4ZhAorgxpcdQE14fDzxOMLzm1nqP8AEh4r1H0jcRBy7zmsb6CNFIPeXEnfInmoz6Xh29dh8KGgT1jmrEk0K0BJBKEAmkohB//Z')]">
              <button onClick={()=>{
                deleteNote(idx)
              }} className='absolute top-7 right-4 p-1 bg-red-500 rounded-full text-xs'><X color="#ffffff" strokeWidth={2.5} size={17} /></button>
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-4 leading-tight text-s font-medium text-gray-600'>{elem.details}</p>
            </div>
          })}
          
        </div>
      </div>
    </div>
  )
}

export default App
