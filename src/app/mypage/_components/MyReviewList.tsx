import ReviewCard from '@/app/mypage/_components/ReviewCard';
import Pagination from '@/components/Pagination';
import { Review } from '@/types/meetings';

type MyReviewListProps = {
    reviews: Review[];
    currentPage?: number;
    onPageChange?: (page: number) => void;
    perPage?: number;
    showPagination?: boolean;
    totalCount?: number;
};
  

const MyReviewList = ({
    reviews,
    currentPage = 1,
    onPageChange,
    perPage = 5,
    showPagination = false,
    totalCount,
  }: MyReviewListProps) => {
    const totalPages = Math.ceil((totalCount ?? reviews.length) / perPage);
    const paginated = showPagination
      ? reviews.slice((currentPage - 1) * perPage, currentPage * perPage)
      : reviews.slice(0, 3);
  
    return (
      <div className="space-y-6 mb-5">
        <h2 className="text-lg font-semibold">리뷰</h2>
        {reviews.length === 0 ? (
          <p className="text-xs text-gray-600">작성된 리뷰가 없습니다.</p>
        ) : (
          <>
            <div className="space-y-4">
              {paginated.map((review, i) => (
                <ReviewCard key={i} {...review} />
              ))}
            </div>
  
        {/* 페이지네이션 */}
        {showPagination && onPageChange && totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default MyReviewList;