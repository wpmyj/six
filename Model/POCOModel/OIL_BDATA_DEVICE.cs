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
	public partial class OIL_BDATA_DEVICE
	{
		public OIL_BDATA_DEVICE ToPOCO(bool isPOCO = true){
			return new OIL_BDATA_DEVICE(){
				DEVICE_ID = this.DEVICE_ID,
				DEPT_CODE = this.DEPT_CODE,
				PHONE_NO = this.PHONE_NO,
				DEVICE_NAME = this.DEVICE_NAME,
				DEVICE_MEMO = this.DEVICE_MEMO,
				DEVICE_NO = this.DEVICE_NO,
			};
		}
	} 
}
