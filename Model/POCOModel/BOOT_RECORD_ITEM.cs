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
	public partial class BOOT_RECORD_ITEM
	{
		public BOOT_RECORD_ITEM ToPOCO(bool isPOCO = true){
			return new BOOT_RECORD_ITEM(){
				PKID = this.PKID,
				FKID = this.FKID,
				FILE_PATH = this.FILE_PATH,
				THUMBNAIL_PATH = this.THUMBNAIL_PATH,
				UPLOAD_TIME = this.UPLOAD_TIME,
				TAKE_TIME = this.TAKE_TIME,
				DESCRIPTION = this.DESCRIPTION,
			};
		}
	} 
}
