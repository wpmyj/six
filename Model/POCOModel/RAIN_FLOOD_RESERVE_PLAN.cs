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
	public partial class RAIN_FLOOD_RESERVE_PLAN
	{
		public RAIN_FLOOD_RESERVE_PLAN ToPOCO(bool isPOCO = true){
			return new RAIN_FLOOD_RESERVE_PLAN(){
				RESERVEPLAN_ID = this.RESERVEPLAN_ID,
				GWD_CODE = this.GWD_CODE,
				DEP_CODE = this.DEP_CODE,
				GQ_CODE = this.GQ_CODE,
				LINE_CODE = this.LINE_CODE,
				LINE_NAME = this.LINE_NAME,
				UPLOAD_DATE = this.UPLOAD_DATE,
				WORD_URL = this.WORD_URL,
				DEMO = this.DEMO,
				WORD_TITLE = this.WORD_TITLE,
			};
		}
	} 
}
