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
	public partial class BROKENRAIL_NEEDSEND
	{
		public BROKENRAIL_NEEDSEND ToPOCO(bool isPOCO = true){
			return new BROKENRAIL_NEEDSEND(){
				SECTION_ID = this.SECTION_ID,
				SECTION_STATUS = this.SECTION_STATUS,
				RECORD_TIME = this.RECORD_TIME,
				MILEAGE_START = this.MILEAGE_START,
				MILEAGE_END = this.MILEAGE_END,
				POINT_NO = this.POINT_NO,
				RAIL_DIR = this.RAIL_DIR,
				LINE_NAME = this.LINE_NAME,
				LINE_DIR = this.LINE_DIR,
				OPERATE_TIME = this.OPERATE_TIME,
				PKID = this.PKID,
				SEND_FLAG = this.SEND_FLAG,
			};
		}
	} 
}
