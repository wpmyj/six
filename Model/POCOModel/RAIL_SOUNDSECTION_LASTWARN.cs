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
	public partial class RAIL_SOUNDSECTION_LASTWARN
	{
		public RAIL_SOUNDSECTION_LASTWARN ToPOCO(bool isPOCO = true){
			return new RAIL_SOUNDSECTION_LASTWARN(){
				PKID = this.PKID,
				SECTION_ID = this.SECTION_ID,
				SECTION_STATUS = this.SECTION_STATUS,
				RECORD_TIME = this.RECORD_TIME,
				IS_SHOW = this.IS_SHOW,
			};
		}
	} 
}
