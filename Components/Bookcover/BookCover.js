import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import { useNavigate } from 'react-router-dom';
import coverImg from "../../images/cover_not_found.jpg";
import { FaArrowLeft } from "react-icons/fa";
import './BookCover.css';

const URL = "https://openlibrary.org/works/";

const BookCover = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if (data) {
          const { description, title, covers, subject_places, subject_times, subjects } = data;
          const newBook = {
            id: id,
            description: description ? description.value : "No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times: subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found"
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleDownloadPDF = () => {
    const fileURL = '../LoremIpsum.pdf';
    const link = document.createElement('a');
    link.href = fileURL;
    link.target = '_blank';
    link.download = 'LoremIpsum.pdf'; // Nama file yang akan diunduh
    link.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data nama dan alamat yang diisi
    console.log("Nama:", name);
    console.log("Alamat:", address);
  };

  if (loading) return <Loading />;

  return (
    <section className='book-details2'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate(`/book/${book.id}`)}>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src={book?.cover_img} alt="cover img" />
          </div>
          <div className='book-details-form'>
            <form onSubmit={handleSubmit}>
              <label htmlFor='name'>Name:</label>
              <input type='text' id='name' value={name} onChange={handleNameChange} />

              <label htmlFor='address'>Address:</label>
              <input type='text' id='address' value={address} onChange={handleAddressChange} />

              <button type='submit'>Rate and Review</button>

              <button type='button' onClick={() => window.open('/LoremIpsum.pdf', '_blank')}>
                Baca Buku
              </button>

              <button type="button" onClick={handleDownloadPDF}>Download PDF</button>
            
            </form>
          </div>
        </div>
      </div>

    </section>
  );
};

export default BookCover;