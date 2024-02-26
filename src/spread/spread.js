import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import dayjs from "dayjs";

export const dynamic = "force-dynamic";

const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_CLOUD_PRIVATE_EMAIL,
    key: process.env.GOOGLE_CLOUD_PRIVATE_KEY,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export async function POST(request) {
    const json = await request.json();

    const spreadsheet = new GoogleSpreadsheet(
        process.env.GOOGLE_SPREADSHEET_ID,
        serviceAccountAuth
    );
    await spreadsheet.loadInfo();

    const sheet = spreadsheet.sheetsByTitle["상담목록(원본)"];

    await sheet.addRow({
        이름: json.name,
        이동전화번호: `'${json.telNumber}`,
        교원ID: json.kyowonUsername,
        상품코드: json.productCode,
        등록날짜: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    });

    return Response.json({
        message: "처리되었습니다.",
    });
}
