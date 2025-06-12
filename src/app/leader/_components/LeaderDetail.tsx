import Button from "@/components/common/Button";
import MultiCategoryFileUpload from "./MultiCategoryFileUpload";
import { LeaderApplication } from "@/types/user";

type LeaderDetailProps = {
    leader: LeaderApplication;
}
const LeaderDetail = ({leader} : LeaderDetailProps) => {
    return (
        <div className="space-y-10">
            <div className="space-y-4">
                <h2 className="text-xl">자기소개<span className="text-xs">(최대 1000자)</span></h2>
                <div className="text-sm">{leader.bio}</div>
            </div>
            <div className="space-y-4">
                <MultiCategoryFileUpload readonly
                    initialItems={leader.certificate.map((item) => ({
                    category: item.type,
                    file: item.file as string,
                }))}
                />
            </div>
            <Button color="gray"  height="h-16" className="w-full text-sm font-bold">삭제하기</Button>
        </div>
    );
}

export default LeaderDetail;