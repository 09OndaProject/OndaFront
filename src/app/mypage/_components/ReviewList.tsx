import Pagination from '@/components/common/Pagination';
import ReviewCard, { ReviewCardProps } from './ReviewCard';

type ReviewListProps = {
    reviews: ReviewCardProps[];
    currentPage?: number;
    onPageChange?: (page: number) => void;
    perPage?: number;
    showPagination?: boolean;
};
  

const ReviewList = ({
    reviews,
    currentPage = 1,
    onPageChange,
    perPage = 5,
    showPagination = false,
  }: ReviewListProps) => {
    const totalPages = Math.ceil(reviews.length / perPage);
    const paginated = showPagination
      ? reviews.slice((currentPage - 1) * perPage, currentPage * perPage)
      : reviews;
  
    return (
      <div className="space-y-6 mb-5">
        <h2 className="text-lg font-semibold">리뷰</h2>
        <div className="space-y-4">
          {paginated.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </div>
  
        {/* 페이지네이션 */}
        {showPagination && onPageChange && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        )}
      </div>
    );
  };

export default ReviewList;
