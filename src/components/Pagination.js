
import ReactPaginate from 'react-paginate';
const PaginationBar = ({ getPage, PageNo }) => {
    const pageCount = PageNo;
    const handlePageClick = (data) => {
        console.log(data.selected + 1); //هيطبع الرقم الي بتضغطو
        getPage(data.selected + 1)      //تم استقبالها وهيتم تنفيذها هنا +بعتت فيها رقم الصفحة الي بضغط عليها عشان يعرضها 
    }
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5} // عدد الصفحات الظاهرة في الشريط عدد الايقونات  بعد السابق او التالي 
            pageCount={pageCount}
            previousLabel="< previous"
            //all in the below from documtation(React pagination) you can understand
            //the className from Bootstrap without any import or install
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    );
}

export default PaginationBar;