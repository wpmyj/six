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
	public partial class BRIDGE_MAINTENAN_NOTICE
	{
		public BRIDGE_MAINTENAN_NOTICE ToPOCO(bool isPOCO = true){
			return new BRIDGE_MAINTENAN_NOTICE(){
				NOTICE_ID = this.NOTICE_ID,
				GWD_CODE = this.GWD_CODE,
				CJ_CODE = this.CJ_CODE,
				GQ_CODE = this.GQ_CODE,
				CHECK_GQ_CODE = this.CHECK_GQ_CODE,
				LINE_CODE = this.LINE_CODE,
				LINE_DIR = this.LINE_DIR,
				CENTER_MILE = this.CENTER_MILE,
				EQU_CAT = this.EQU_CAT,
				EQU_CODE = this.EQU_CODE,
				CHECK_DATE = this.CHECK_DATE,
				ACCESS_DATE = this.ACCESS_DATE,
				EVALUATE_DATE = this.EVALUATE_DATE,
				ISSUE_DEPT = this.ISSUE_DEPT,
				ISSUE_DATE = this.ISSUE_DATE,
				NOTICE_STATUS = this.NOTICE_STATUS,
				MEMO = this.MEMO,
				ISSUER = this.ISSUER,
				EQU_NAME = this.EQU_NAME,
				ACTUAL_PROC_DATE = this.ACTUAL_PROC_DATE,
			};
		}
	} 
}
