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
	public partial class SCRIPTS_SECTION_TRACK_INFO
	{
		public SCRIPTS_SECTION_TRACK_INFO ToPOCO(bool isPOCO = true){
			return new SCRIPTS_SECTION_TRACK_INFO(){
				PKID = this.PKID,
				LNG = this.LNG,
				LAT = this.LAT,
				MARS_LNG = this.MARS_LNG,
				MARS_LAT = this.MARS_LAT,
				TRACK_ADDR = this.TRACK_ADDR,
				MEMO = this.MEMO,
			};
		}
	} 
}
