import { Book } from "@/config/fitness";

interface BookProps {
  books: Book[];
}

const BookList: React.FC<BookProps> = ({ books = [] }) => {
  return (
    < div className = "my-10 grid grid-cols-4 gap-2" >
    {
      books.map((item, index) => (
        <a
          key={index}
          target="_blank"
          rel="noreferrer"
          className="book-container p-10 mr-5 mb-5 group relative block overflow-hidden rounded-xl bg-slate-50 shadow-md transition-all duration-500 hover:bg-[#063142]"
        >
          <div className="book">
            <img src={item.img} />
          </div>
        </a>
      ))
    }
  </div >
  )
}

export default BookList