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
	public partial class BRIDGE_BRIDGE
	{
		public BRIDGE_BRIDGE ToPOCO(bool isPOCO = true){
			return new BRIDGE_BRIDGE(){
				BRIDGE_ID = this.BRIDGE_ID,
				GWD_CODE = this.GWD_CODE,
				CJ_CODE = this.CJ_CODE,
				GQ_CODE = this.GQ_CODE,
				LINE_CODE = this.LINE_CODE,
				LINE_DIR = this.LINE_DIR,
				CENTER_MILE = this.CENTER_MILE,
				BRIDGE_CODE = this.BRIDGE_CODE,
				BRIDGE_NAME = this.BRIDGE_NAME,
				BRIDGE_SECTION = this.BRIDGE_SECTION,
				TRACK_NUM = this.TRACK_NUM,
				FULL_LENGTH = this.FULL_LENGTH,
				BRIDGE_LENGTH = this.BRIDGE_LENGTH,
				MAINTAINCE_LENGTH = this.MAINTAINCE_LENGTH,
				BUILD_YEAR = this.BUILD_YEAR,
				HOLESPAN_STYLE = this.HOLESPAN_STYLE,
				BRIDGE_TYPE = this.BRIDGE_TYPE,
				RUN_STATUS = this.RUN_STATUS,
				MEMO = this.MEMO,
				TEST_FLAG = this.TEST_FLAG,
				TEST_REPORT = this.TEST_REPORT,
			};
		}
	} 
}
