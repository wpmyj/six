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
	public partial class RAIL_SOUNDRECORD_WARN_FINAL
	{
		public RAIL_SOUNDRECORD_WARN_FINAL ToPOCO(bool isPOCO = true){
			return new RAIL_SOUNDRECORD_WARN_FINAL(){
				WARNRECORD_ID = this.WARNRECORD_ID,
				POINT_NO = this.POINT_NO,
				POS_FLAG = this.POS_FLAG,
				WARN_FLAG = this.WARN_FLAG,
				WARN_TIME = this.WARN_TIME,
				CLEAR_REASON = this.CLEAR_REASON,
				CLEAR_MAN = this.CLEAR_MAN,
				CLEAR_TIME = this.CLEAR_TIME,
				MILE_START = this.MILE_START,
				MILE_END = this.MILE_END,
			};
		}
	} 
}
