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
	public partial class BROKENRAIL_SECTION_STATUS
	{
		public BROKENRAIL_SECTION_STATUS ToPOCO(bool isPOCO = true){
			return new BROKENRAIL_SECTION_STATUS(){
				SECTION_ID = this.SECTION_ID,
				SECTION_STATUS = this.SECTION_STATUS,
				RECORD_TIME = this.RECORD_TIME,
				IS_SHOW = this.IS_SHOW,
				PKID = this.PKID,
				MILEAGE_START = this.MILEAGE_START,
				MILEAGE_END = this.MILEAGE_END,
				POINT_NO = this.POINT_NO,
				RECORD_TIME2 = this.RECORD_TIME2,
				RAIL_DIR = this.RAIL_DIR,
			};
		}
	} 
}
