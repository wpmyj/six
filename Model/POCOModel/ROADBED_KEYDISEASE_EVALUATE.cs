//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;

namespace Model
{
	public partial class ROADBED_KEYDISEASE_EVALUATE
	{
		public ROADBED_KEYDISEASE_EVALUATE ToPOCO(bool isPOCO = true){
			return new ROADBED_KEYDISEASE_EVALUATE(){
				EVALUATE_ID = this.EVALUATE_ID,
				GWD_CODE = this.GWD_CODE,
				CJ_CODE = this.CJ_CODE,
				GQ_CODE = this.GQ_CODE,
				LINE_CODE = this.LINE_CODE,
				LINE_CAT = this.LINE_CAT,
				LINE_DIR = this.LINE_DIR,
				SIDE = this.SIDE,
				SECTION_STATION = this.SECTION_STATION,
				START_MILE = this.START_MILE,
				END_MILE = this.END_MILE,
				LEN = this.LEN,
				EVALUATE_DATE = this.EVALUATE_DATE,
				AVG_SCORE = this.AVG_SCORE,
				EVALUATE_RES = this.EVALUATE_RES,
				OVERRUN_PRO = this.OVERRUN_PRO,
				PRE_EVALUATE_RES = this.PRE_EVALUATE_RES,
				NOTICE_ID = this.NOTICE_ID,
				NOTICE_IS_SEND = this.NOTICE_IS_SEND,
				MEMO = this.MEMO,
			};
		}
	} 
}
